# ⚙️ Guide de Configuration HD Connect

> Ce document détaille toutes les étapes de configuration pour rendre le site 100% fonctionnel.

---

## 📋 Checklist Rapide

- [ ] Variables d'environnement configurées
- [ ] Supabase connecté
- [ ] Premier utilisateur admin créé
- [ ] Clé API Resend ajoutée
- [ ] Domaine email vérifié
- [ ] Google Analytics installé
- [ ] Sitemap soumis à Google

---

## 1. Variables d'Environnement

### Fichier .env (racine du projet)

```bash
# Supabase - Ces valeurs sont déjà configurées
VITE_SUPABASE_URL="https://emvmyrdxmpsoaykabszb.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
VITE_SUPABASE_PROJECT_ID="emvmyrdxmpsoaykabszb"
```

> ⚠️ Ces variables sont publiques (VITE_*) et peuvent être exposées côté client.

---

## 2. Configuration Supabase

### 2.1 Accès au Dashboard

1. Aller sur [supabase.com](https://supabase.com)
2. Se connecter
3. Sélectionner le projet `emvmyrdxmpsoaykabszb`

### 2.2 Vérifier les Tables

Dans **Table Editor**, vérifier que les tables existent :

#### Table `customer_requests`

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Identifiant unique |
| created_at | timestamptz | Date création |
| updated_at | timestamptz | Date mise à jour |
| name | text | Nom du client |
| email | text | Email |
| phone | text | Téléphone |
| request_type | enum | quote/intervention/contact |
| services | text[] | Services demandés |
| message | text | Message libre |
| city | text | Ville |
| postal_code | text | Code postal |
| status | enum | Statut de la demande |

#### Table `user_roles`

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Identifiant unique |
| user_id | uuid | Référence auth.users |
| role | enum | admin/user |
| created_at | timestamptz | Date création |

### 2.3 Créer le Premier Admin

1. Aller sur `/auth` de votre site
2. Créer un compte avec email/mot de passe
3. Noter l'UUID de l'utilisateur créé (visible dans **Authentication** → **Users**)
4. Aller dans **SQL Editor** et exécuter :

```sql
INSERT INTO public.user_roles (user_id, role)
VALUES ('VOTRE-UUID-ICI', 'admin');
```

5. Vous pouvez maintenant accéder à `/admin`

---

## 3. Configuration des Emails (Resend)

### 3.1 Créer un Compte Resend

1. Aller sur [resend.com](https://resend.com)
2. Créer un compte gratuit
3. Aller dans **API Keys**
4. Créer une nouvelle clé avec les permissions `sending_access`
5. Copier la clé (commence par `re_`)

### 3.2 Ajouter la Clé dans Supabase

1. Dans Supabase Dashboard, aller dans **Edge Functions** → **Secrets**
2. Cliquer **Add new secret**
3. Nom : `RESEND_API_KEY`
4. Valeur : Votre clé `re_...`
5. Sauvegarder

### 3.3 Vérifier le Domaine (Optionnel mais recommandé)

Pour envoyer des emails depuis `@hdconnect.fr` :

1. Dans Resend, aller dans **Domains**
2. Ajouter `hdconnect.fr`
3. Suivre les instructions pour ajouter les enregistrements DNS :
   - SPF
   - DKIM
   - DMARC (optionnel)

4. Mettre à jour la constante dans `supabase/functions/send-quote-email/index.ts` :

```typescript
const SENDER_EMAIL = "HD Connect <contact@hdconnect.fr>";
```

### 3.4 Tester l'Envoi

1. Aller sur le site
2. Remplir le formulaire de devis
3. Vérifier que l'email arrive à `kamal@hdconnect.fr`

---

## 4. Google Analytics

### 4.1 Créer une Propriété

1. Aller sur [analytics.google.com](https://analytics.google.com)
2. Créer un compte ou sélectionner un compte existant
3. Créer une propriété pour `hdconnect.fr`
4. Configurer pour "Web"
5. Copier l'ID de mesure (format `G-XXXXXXXXXX`)

### 4.2 Ajouter le Script

Modifier `index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- ... autres tags ... -->
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

---

## 5. Google Search Console

### 5.1 Ajouter le Site

1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter une propriété
3. Choisir "Préfixe de l'URL" : `https://hdconnect.fr`
4. Vérifier la propriété (DNS, balise HTML, ou Google Analytics)

### 5.2 Soumettre le Sitemap

1. Dans Search Console, aller dans **Sitemaps**
2. Ajouter : `https://hdconnect.fr/sitemap.xml`
3. Cliquer **Envoyer**

### 5.3 Demander l'Indexation

1. Dans **Inspection de l'URL**
2. Entrer l'URL de la page d'accueil
3. Cliquer **Demander une indexation**
4. Répéter pour les pages importantes

---

## 6. Liens Réseaux Sociaux

Mettre à jour dans `src/data/content.ts` :

```typescript
export const content = {
  contact: {
    // ... autres infos ...
    social: {
      facebook: "https://facebook.com/hdconnect.fr",
      instagram: "https://instagram.com/hdconnect_fr",
      linkedin: "https://linkedin.com/company/hdconnect",
      twitter: "https://twitter.com/hdconnect_fr"
    }
  }
};
```

---

## 7. Domaine Personnalisé

### 7.1 Configuration DNS

Ajouter ces enregistrements chez votre registrar :

```
Type: A
Name: @
Value: [IP fournie par Lovable]
TTL: 3600

Type: CNAME
Name: www
Value: [votre-projet].lovable.app
TTL: 3600
```

### 7.2 Configuration Lovable

1. Dans Lovable, ouvrir le projet
2. Aller dans **Settings** → **Domains**
3. Ajouter `hdconnect.fr`
4. Attendre la propagation DNS (jusqu'à 48h)

### 7.3 Redirection www → apex

Configurer une redirection 301 de `www.hdconnect.fr` vers `hdconnect.fr` :
- Soit via Lovable (automatique)
- Soit via Cloudflare ou votre CDN

---

## 8. Sécurité

### 8.1 En-têtes de Sécurité

À ajouter dans la configuration du serveur/CDN :

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 8.2 Certificat SSL

Automatiquement géré par Lovable pour les domaines personnalisés.

---

## 9. Performance

### 9.1 Optimisation Images

Les images sont déjà :
- En format JPG optimisé
- Chargées en lazy loading
- Redimensionnées selon le viewport

### 9.2 Vérifier les Métriques

1. Aller sur [PageSpeed Insights](https://pagespeed.web.dev)
2. Entrer `https://hdconnect.fr`
3. Objectifs :
   - Performance : > 85
   - Accessibilité : > 90
   - Best Practices : > 90
   - SEO : > 95

---

## 10. Maintenance

### 10.1 Mises à Jour Dépendances

```bash
# Vérifier les mises à jour disponibles
pnpm outdated

# Mettre à jour les dépendances
pnpm update
```

### 10.2 Surveillance Supabase

- Vérifier régulièrement l'utilisation dans le Dashboard
- Surveiller les logs d'erreurs des Edge Functions
- Exporter les données de `customer_requests` périodiquement

### 10.3 Backup

```bash
# Exporter les données (via Supabase CLI)
supabase db dump -f backup.sql
```

---

## 📞 Support

En cas de problème :
1. Consulter les logs dans Supabase Dashboard
2. Vérifier la console du navigateur
3. Contacter le développeur

---

**Document créé le 03 Janvier 2026**
