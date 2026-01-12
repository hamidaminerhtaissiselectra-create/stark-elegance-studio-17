import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Check, Camera, Shield, Lock, PhoneCall, Wifi, Wrench, HelpCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Types
type ServiceType = 'camera' | 'alarm' | 'access' | 'intercom' | 'network' | 'maintenance' | 'other';
type RequestType = 'quote' | 'intervention';

const serviceOptions: { id: ServiceType; label: string; icon: typeof Camera }[] = [
  { id: 'camera', label: 'Installation de caméras', icon: Camera },
  { id: 'alarm', label: 'Installation d\'alarme', icon: Shield },
  { id: 'access', label: 'Contrôle d\'accès', icon: Lock },
  { id: 'intercom', label: 'Interphone / Visiophone', icon: PhoneCall },
  { id: 'network', label: 'Installation réseau & Wi-Fi', icon: Wifi },
  { id: 'maintenance', label: 'Maintenance / Dépannage', icon: Wrench },
  { id: 'other', label: 'Autre demande', icon: HelpCircle },
];

const interventionOptions: { id: string; label: string; icon: typeof Camera }[] = [
  { id: 'camera_fail', label: 'Caméra en panne', icon: Camera },
  { id: 'alarm_fail', label: 'Alarme qui bip / défaut', icon: Shield },
  { id: 'intercom_fail', label: 'Interphone ne fonctionne plus', icon: PhoneCall },
  { id: 'access_fail', label: 'Problème contrôle d\'accès', icon: Lock },
  { id: 'network_fail', label: 'Panne réseau / Wi-Fi', icon: Wifi },
  { id: 'material_replace', label: 'Remplacement matériel', icon: Wrench },
  { id: 'other_fail', label: 'Autre problème', icon: HelpCircle },
];

// Composant de bouton d'option
interface OptionButtonProps {
  icon: typeof Camera;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const OptionButton = ({ icon: Icon, label, isSelected, onClick }: OptionButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center p-4 text-center border-2 rounded-lg transition-all duration-200",
      "hover:border-primary hover:shadow-md",
      isSelected ? "border-primary bg-primary/10 shadow-lg" : "border-border bg-card"
    )}
  >
    <Icon className="w-8 h-8 mb-2 text-primary" />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const QuoteFunnelSimple = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<RequestType>('quote');
  const [selectedService, setSelectedService] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    timeline: '',
    budget: '',
    description: '',
    urgency: '',
    message: '',
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    try {
      // Validation simple
      if (!formData.name || !formData.phone || !formData.email || !formData.address) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive",
        });
        return;
      }

      const finalData = {
        requestType,
        selectedService,
        selectedProblem,
        ...formData
      };

      // Envoi via Formspree
      const response = await fetch('https://formspree.io/f/mwpzrqyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (!response.ok) {
        throw new Error("L'envoi de l'e-mail a échoué.");
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons rapidement.",
      });
      
      // Réinitialiser
      setTimeout(() => {
        setStep(1);
        setSelectedService('');
        setSelectedProblem('');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          timeline: '',
          budget: '',
          description: '',
          urgency: '',
          message: '',
        });
      }, 1000);

    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur s'est produite lors de l'envoi.",
        variant: "destructive",
      });
    }
  };

  const renderStep = () => {
    // Étape 1 - Sélection du service (Devis) ou Type de problème (Intervention)
    if (step === 1) {
      if (requestType === 'quote') {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviceOptions.map(option => (
              <OptionButton
                key={option.id}
                icon={option.icon}
                label={option.label}
                isSelected={selectedService === option.id}
                onClick={() => {
                  setSelectedService(option.id);
                  nextStep();
                }}
              />
            ))}
          </div>
        );
      } else {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interventionOptions.map(option => (
              <OptionButton
                key={option.id}
                icon={option.icon}
                label={option.label}
                isSelected={selectedProblem === option.id}
                onClick={() => {
                  setSelectedProblem(option.id);
                  nextStep();
                }}
              />
            ))}
          </div>
        );
      }
    }

    // Étape 2 - Détails du projet (Devis) ou Détails du problème (Intervention)
    if (step === 2) {
      if (requestType === 'quote') {
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Détails de votre projet</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Période souhaitée *</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                >
                  <option value="">Sélectionner...</option>
                  <option value="urgent">Urgent (Moins de 1 mois)</option>
                  <option value="court">Court terme (1 à 3 mois)</option>
                  <option value="moyen">Moyen terme (3 à 6 mois)</option>
                  <option value="long">Long terme (Plus de 6 mois)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget estimé (Optionnel)</label>
                <Input
                  type="text"
                  placeholder="Ex: 5000€ - 10000€"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description de votre besoin</label>
              <Textarea
                placeholder="Décrivez brièvement votre projet..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" onClick={() => formData.timeline ? nextStep() : alert('Veuillez sélectionner une période')}>
                Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Détails du problème</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description détaillée du problème *</label>
              <Textarea
                placeholder="Ex: La caméra n°3 ne s'allume plus depuis hier..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Urgence de l'intervention *</label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.urgency}
                onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
              >
                <option value="">Sélectionner...</option>
                <option value="critique">Critique (Intervention immédiate)</option>
                <option value="haute">Haute (Sous 48h)</option>
                <option value="normale">Normale (Sous 1 semaine)</option>
              </select>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" onClick={() => (formData.description && formData.urgency) ? nextStep() : alert('Veuillez remplir tous les champs requis')}>
                Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );
      }
    }

    // Étape 3 - Informations Client
    if (step === 3) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Vos coordonnées</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nom complet *</label>
              <Input
                placeholder="Votre nom et prénom"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Téléphone *</label>
              <Input
                placeholder="Ex: 06 12 34 56 78"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email *</label>
            <Input
              type="email"
              placeholder="votre.email@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Adresse (Ville/CP) *</label>
            <Input
              placeholder="Ex: Paris, 75001"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message (Optionnel)</label>
            <Textarea
              placeholder="Des informations supplémentaires ?"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={prevStep}>
              <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
            </Button>
            <Button type="button" onClick={handleSubmit}>
              <Check className="w-4 h-4 mr-2" /> Valider ma demande
            </Button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="quote" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Obtenez votre devis personnalisé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Button 
                data-quote-btn
                variant={requestType === 'quote' ? 'default' : 'outline'}
                onClick={() => setRequestType('quote')}
              >
                Demande de Devis
              </Button>
              <Button 
                data-intervention-btn
                variant={requestType === 'intervention' ? 'default' : 'outline'}
                onClick={() => setRequestType('intervention')}
              >
                Demande d'Intervention
              </Button>
            </div>
            {renderStep()}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteFunnelSimple;
