import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const TARGET_EMAIL = "kamal@hdconnect.fr";
const SENDER_EMAIL = "onboarding@resend.dev"; // Utilisez votre domaine vérifié

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ status: "error", message: "Method Not Allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const formData = await req.json();
    
    // 1. Construction du corps de l'e-mail
    let subject = `[HD Connect - Demande] `;
    let body = `Nouvelle demande reçue via le formulaire du site.\n\n`;

    // Logique pour déterminer le type de demande et construire le sujet/corps
    if (formData.requestType === 'quote') {
      const serviceLabel = formData.selectedService || 'Devis Général';
      subject += `Devis: ${serviceLabel}`;
      body += `--- Demande de Devis ---\n`;
      body += `Service: ${serviceLabel}\n\n`;
      
      // Détails du projet (QuoteFunnel)
      if (formData.quoteData) {
        body += `--- Détails du Projet ---\n`;
        for (const [key, value] of Object.entries(formData.quoteData.details || {})) {
          body += `${key}: ${value}\n`;
        }
        body += `\n`;
      }
      
      // Informations Client (QuoteFunnel)
      if (formData.clientInfo) {
        body += `--- Informations Client ---\n`;
        body += `Nom: ${formData.clientInfo.name || 'N/A'}\n`;
        body += `Téléphone: ${formData.clientInfo.phone || 'N/A'}\n`;
        body += `Email: ${formData.clientInfo.email || 'N/A'}\n`;
        body += `Adresse (Ville/CP): ${formData.clientInfo.address || 'N/A'}\n`;
        body += `Période souhaitée: ${formData.clientInfo.timeline || 'N/A'}\n`;
        body += `Budget: ${formData.clientInfo.budget || 'Non spécifié'}\n`;
        body += `Message: ${formData.clientInfo.message || 'Aucun'}\n`;
      }

    } else if (formData.requestType === 'intervention') {
      const problemLabel = formData.selectedProblem || 'Intervention Générale';
      subject += `Intervention: ${problemLabel}`;
      body += `--- Demande d'Intervention ---\n`;
      body += `Type de Problème: ${problemLabel}\n`;
      
      // Détails de l'intervention (QuoteFunnel)
      if (formData.interventionData) {
        body += `--- Détails du Problème ---\n`;
        body += `Description: ${formData.interventionData.description || 'N/A'}\n`;
        body += `Fonctionnait avant: ${formData.interventionData.workedBefore || 'N/A'}\n`;
        body += `Lieu: ${formData.interventionData.locationType || 'N/A'}\n`;
        body += `Urgence: ${formData.interventionData.urgency || 'N/A'}\n\n`;
      }

      // Informations Client (QuoteFunnel)
      if (formData.clientInfo) {
        body += `--- Informations Client ---\n`;
        body += `Nom: ${formData.clientInfo.name || 'N/A'}\n`;
        body += `Téléphone: ${formData.clientInfo.phone || 'N/A'}\n`;
        body += `Email: ${formData.clientInfo.email || 'N/A'}\n`;
        body += `Adresse (Ville/CP): ${formData.clientInfo.address || 'N/A'}\n`;
        body += `Message: ${formData.clientInfo.message || 'Aucun'}\n`;
      }
    } else {
      // Cas du QuoteFunnelSimple
      subject += `Demande de contact`;
      body += `--- Demande de Contact Simple ---\n`;
      body += `Service: ${formData.selectedService || 'N/A'}\n`;
      body += `Problème: ${formData.selectedProblem || 'N/A'}\n\n`;
      body += `--- Informations Client ---\n`;
      body += `Nom: ${formData.name || 'N/A'}\n`;
      body += `Téléphone: ${formData.phone || 'N/A'}\n`;
      body += `Email: ${formData.email || 'N/A'}\n`;
      body += `Adresse (Ville/CP): ${formData.address || 'N/A'}\n`;
      body += `Période souhaitée: ${formData.timeline || 'N/A'}\n`;
      body += `Budget: ${formData.budget || 'Non spécifié'}\n`;
      body += `Description: ${formData.description || 'Aucune'}\n`;
      body += `Urgence: ${formData.urgency || 'N/A'}\n`;
      body += `Message: ${formData.message || 'Aucun'}\n`;
    }

    // 2. Envoi de l'e-mail via Resend
    const emailResponse = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [TARGET_EMAIL],
      subject: subject,
      text: body,
      reply_to: formData.clientInfo?.email || formData.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ status: "success", message: "Email envoyé avec succès" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error) {
    console.error("Function Error:", error);
    return new Response(
      JSON.stringify({ 
        status: "error", 
        message: error instanceof Error ? error.message : "Erreur lors de l'envoi de l'email" 
      }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
