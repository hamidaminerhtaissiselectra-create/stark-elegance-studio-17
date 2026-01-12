import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const TARGET_EMAIL = "kamal@hdconnect.fr";
const SENDER_EMAIL = "HD Connect <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ============================================
// INPUT VALIDATION & SANITIZATION
// ============================================

// Field length limits
const MAX_LENGTHS = {
  name: 100,
  email: 255,
  phone: 30,
  address: 300,
  message: 2000,
  description: 2000,
  service: 100,
  timeline: 100,
  budget: 50,
  urgency: 50,
  problemType: 100,
};

// Email regex validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone regex validation (allows international formats)
const PHONE_REGEX = /^[\d\s\-+().]{6,30}$/;

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  if (!text || typeof text !== 'string') return '';
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char);
}

// Sanitize and truncate string
function sanitizeString(value: unknown, maxLength: number): string {
  if (!value || typeof value !== 'string') return '';
  return escapeHtml(value.trim().slice(0, maxLength));
}

// Validate email format
function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return EMAIL_REGEX.test(email.trim()) && email.length <= MAX_LENGTHS.email;
}

// Validate phone format
function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  return PHONE_REGEX.test(phone.trim());
}

// Validate request type
function isValidRequestType(type: string): boolean {
  return ['quote', 'intervention', 'contact'].includes(type);
}

// Sanitize client info object
interface SanitizedClientInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

function sanitizeClientInfo(clientInfo: unknown): SanitizedClientInfo | null {
  if (!clientInfo || typeof clientInfo !== 'object') return null;
  
  const info = clientInfo as Record<string, unknown>;
  const email = typeof info.email === 'string' ? info.email.trim() : '';
  const phone = typeof info.phone === 'string' ? info.phone.trim() : '';
  
  // Email is required and must be valid
  if (!isValidEmail(email)) {
    return null;
  }
  
  // Phone must be valid if provided
  if (phone && !isValidPhone(phone)) {
    return null;
  }
  
  return {
    name: sanitizeString(info.name, MAX_LENGTHS.name) || 'Client',
    email: email.slice(0, MAX_LENGTHS.email),
    phone: sanitizeString(info.phone, MAX_LENGTHS.phone),
    address: sanitizeString(info.address, MAX_LENGTHS.address),
  };
}

// Sanitize quote data
interface SanitizedQuoteData {
  service: string;
  timeline: string;
  budget: string;
  description: string;
}

function sanitizeQuoteData(quoteData: unknown): SanitizedQuoteData {
  if (!quoteData || typeof quoteData !== 'object') {
    return { service: '', timeline: '', budget: '', description: '' };
  }
  
  const data = quoteData as Record<string, unknown>;
  return {
    service: sanitizeString(data.service, MAX_LENGTHS.service),
    timeline: sanitizeString(data.timeline, MAX_LENGTHS.timeline),
    budget: sanitizeString(data.budget, MAX_LENGTHS.budget),
    description: sanitizeString(data.description, MAX_LENGTHS.description),
  };
}

// Sanitize intervention data
interface SanitizedInterventionData {
  problemType: string;
  description: string;
  urgency: string;
}

function sanitizeInterventionData(interventionData: unknown): SanitizedInterventionData {
  if (!interventionData || typeof interventionData !== 'object') {
    return { problemType: '', description: '', urgency: '' };
  }
  
  const data = interventionData as Record<string, unknown>;
  return {
    problemType: sanitizeString(data.problemType, MAX_LENGTHS.problemType),
    description: sanitizeString(data.description, MAX_LENGTHS.description),
    urgency: sanitizeString(data.urgency, MAX_LENGTHS.urgency),
  };
}

// ============================================
// EMAIL TEMPLATES
// ============================================

// Email de confirmation pour le client
const getClientConfirmationEmail = (clientName: string, requestType: string) => {
  const typeLabels: Record<string, string> = {
    quote: "demande de devis",
    intervention: "demande d'intervention",
    contact: "message"
  };
  
  const typeLabel = typeLabels[requestType] || "demande";
  const safeName = escapeHtml(clientName);
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px;">HD Connect</h1>
        <p style="color: #bfdbfe; margin: 10px 0 0 0; font-size: 14px;">Sécurité &amp; Technologie</p>
      </div>
      
      <div style="padding: 40px 30px;">
        <h2 style="color: #1f2937; margin-top: 0;">Bonjour ${safeName},</h2>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Nous avons bien reçu votre <strong>${typeLabel}</strong> et nous vous en remercions.
        </p>
        
        <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
          <p style="color: #1e40af; margin: 0; font-weight: 600;">
            ✓ Votre demande a été enregistrée avec succès
          </p>
        </div>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Notre équipe va étudier votre demande et vous recontactera dans les <strong>plus brefs délais</strong> 
          (généralement sous 24 à 48 heures ouvrées).
        </p>
        
        <div style="background-color: #f9fafb; padding: 25px; border-radius: 8px; margin: 25px 0;">
          <h3 style="color: #1f2937; margin-top: 0; font-size: 16px;">En attendant, vous pouvez nous contacter :</h3>
          <p style="color: #4b5563; margin: 10px 0;">
            📞 <a href="tel:+33627135304" style="color: #2563eb; text-decoration: none;">+33 6 27 13 53 04</a> (Mobile)
          </p>
          <p style="color: #4b5563; margin: 10px 0;">
            📞 <a href="tel:+33183643640" style="color: #2563eb; text-decoration: none;">+33 1 83 64 36 40</a> (Fixe)
          </p>
          <p style="color: #4b5563; margin: 10px 0;">
            ✉️ <a href="mailto:kamal@hdconnect.fr" style="color: #2563eb; text-decoration: none;">kamal@hdconnect.fr</a>
          </p>
        </div>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Cordialement,<br/>
          <strong>L'équipe HD Connect</strong>
        </p>
      </div>
      
      <div style="background-color: #1f2937; padding: 25px 30px; text-align: center;">
        <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px;">
          HD Connect - Expert en Sécurité depuis 10 ans
        </p>
        <p style="color: #6b7280; margin: 0; font-size: 12px;">
          Vidéosurveillance • Alarmes • Contrôle d'accès • Domotique
        </p>
      </div>
    </div>
  `;
};

// ============================================
// MAIN HANDLER
// ============================================

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Enforce POST method
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Parse request body with size limit check
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 50000) {
      console.error("Request body too large:", contentLength);
      return new Response(
        JSON.stringify({ error: "Request body too large" }),
        { status: 413, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const formData = await req.json();
    console.log("Received form data (request type):", formData.requestType || "unknown");

    // Si c'est une demande de confirmation uniquement (Formspree gère la notification admin)
    if (formData.confirmationOnly) {
      const sanitizedClient = sanitizeClientInfo(formData.clientInfo);
      
      if (!sanitizedClient || !sanitizedClient.email) {
        return new Response(
          JSON.stringify({ success: true, message: "No valid client email provided" }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const clientEmailResponse = await resend.emails.send({
        from: SENDER_EMAIL,
        to: [sanitizedClient.email],
        subject: "✅ Confirmation de votre demande - HD Connect",
        html: getClientConfirmationEmail(sanitizedClient.name, formData.requestType || "contact"),
      });
      console.log("Client confirmation email sent:", clientEmailResponse);
      
      return new Response(
        JSON.stringify({ success: true, clientMessageId: (clientEmailResponse as any).id }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let subject = "";
    let body = "";
    let clientEmail = "";
    let clientName = "";

    // Construction de l'email selon le type de demande
    if (formData.requestType === "quote") {
      const sanitizedClient = sanitizeClientInfo(formData.clientInfo);
      
      if (!sanitizedClient) {
        console.error("Invalid client info for quote request");
        return new Response(
          JSON.stringify({ error: "Invalid client information. Please check email and phone format." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const sanitizedQuote = sanitizeQuoteData(formData.quoteData);
      const sanitizedMessage = sanitizeString(formData.message, MAX_LENGTHS.message);
      
      clientEmail = sanitizedClient.email;
      clientName = sanitizedClient.name;
      
      subject = "🔔 Nouvelle demande de devis - HD Connect";
      body = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nouvelle demande de devis
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations client</h3>
            <p><strong>Nom :</strong> ${sanitizedClient.name}</p>
            <p><strong>Email :</strong> <a href="mailto:${sanitizedClient.email}">${sanitizedClient.email}</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:${sanitizedClient.phone}">${sanitizedClient.phone}</a></p>
            <p><strong>Adresse :</strong> ${sanitizedClient.address}</p>
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Détails du projet</h3>
            <p><strong>Service demandé :</strong> ${sanitizedQuote.service}</p>
            <p><strong>Période souhaitée :</strong> ${sanitizedQuote.timeline}</p>
            ${sanitizedQuote.budget ? `<p><strong>Budget estimé :</strong> ${sanitizedQuote.budget}</p>` : ''}
            ${sanitizedQuote.description ? `<p><strong>Description :</strong><br/>${sanitizedQuote.description.replace(/\n/g, '<br/>')}</p>` : ''}
          </div>
          
          ${sanitizedMessage ? `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1f2937; margin-top: 0;">Message supplémentaire</h3>
              <p>${sanitizedMessage.replace(/\n/g, '<br/>')}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement depuis le site HD Connect.</p>
          </div>
        </div>
      `;
    } else if (formData.requestType === "intervention") {
      const sanitizedClient = sanitizeClientInfo(formData.clientInfo);
      
      if (!sanitizedClient) {
        console.error("Invalid client info for intervention request");
        return new Response(
          JSON.stringify({ error: "Invalid client information. Please check email and phone format." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const sanitizedIntervention = sanitizeInterventionData(formData.interventionData);
      const sanitizedMessage = sanitizeString(formData.message, MAX_LENGTHS.message);
      
      clientEmail = sanitizedClient.email;
      clientName = sanitizedClient.name;
      
      subject = "🚨 Demande d'intervention urgente - HD Connect";
      body = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            ⚠️ Demande d'intervention urgente
          </h2>
          
          <div style="background-color: #fee2e2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #991b1b; margin-top: 0;">Niveau d'urgence : ${sanitizedIntervention.urgency}</h3>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations client</h3>
            <p><strong>Nom :</strong> ${sanitizedClient.name}</p>
            <p><strong>Email :</strong> <a href="mailto:${sanitizedClient.email}">${sanitizedClient.email}</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:${sanitizedClient.phone}">${sanitizedClient.phone}</a></p>
            <p><strong>Adresse :</strong> ${sanitizedClient.address}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Détails du problème</h3>
            <p><strong>Type de problème :</strong> ${sanitizedIntervention.problemType}</p>
            <p><strong>Description :</strong><br/>${sanitizedIntervention.description.replace(/\n/g, '<br/>')}</p>
          </div>
          
          ${sanitizedMessage ? `
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1f2937; margin-top: 0;">Message supplémentaire</h3>
              <p>${sanitizedMessage.replace(/\n/g, '<br/>')}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement depuis le site HD Connect.</p>
          </div>
        </div>
      `;
    } else {
      // Contact simple (depuis le formulaire Contact)
      const email = typeof formData.email === 'string' ? formData.email.trim() : '';
      const phone = typeof formData.phone === 'string' ? formData.phone.trim() : '';
      
      if (!isValidEmail(email)) {
        console.error("Invalid email for contact request");
        return new Response(
          JSON.stringify({ error: "Invalid email address" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (phone && !isValidPhone(phone)) {
        console.error("Invalid phone for contact request");
        return new Response(
          JSON.stringify({ error: "Invalid phone number format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      clientEmail = email.slice(0, MAX_LENGTHS.email);
      clientName = sanitizeString(formData.name, MAX_LENGTHS.name) || "Client";
      const sanitizedPhone = sanitizeString(formData.phone, MAX_LENGTHS.phone);
      const sanitizedMessage = sanitizeString(formData.message, MAX_LENGTHS.message);
      
      if (!sanitizedMessage) {
        console.error("Empty message for contact request");
        return new Response(
          JSON.stringify({ error: "Message is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      subject = "📧 Nouveau message de contact - HD Connect";
      body = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations</h3>
            <p><strong>Nom :</strong> ${clientName}</p>
            <p><strong>Email :</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></p>
            ${sanitizedPhone ? `<p><strong>Téléphone :</strong> <a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></p>` : ''}
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p>${sanitizedMessage.replace(/\n/g, '<br/>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement depuis le site HD Connect.</p>
          </div>
        </div>
      `;
    }

    // Envoi de l'email à HD Connect (notification)
    const adminEmailResponse = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [TARGET_EMAIL],
      subject: subject,
      html: body,
    });

    console.log("Admin notification email sent:", adminEmailResponse);

    // Envoi de l'email de confirmation au client
    let clientEmailResponse = null;
    if (clientEmail && isValidEmail(clientEmail)) {
      try {
        clientEmailResponse = await resend.emails.send({
          from: SENDER_EMAIL,
          to: [clientEmail],
          subject: "✅ Confirmation de votre demande - HD Connect",
          html: getClientConfirmationEmail(clientName, formData.requestType || "contact"),
        });
        console.log("Client confirmation email sent:", clientEmailResponse);
      } catch (clientEmailError: any) {
        console.error("Error sending client confirmation email:", clientEmailError);
        // On continue même si l'email de confirmation échoue
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminMessageId: (adminEmailResponse as any).id || "sent",
        clientMessageId: (clientEmailResponse as any)?.id || null
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
