# Fashion Nights - Serverless CRM Landing Page

**[🌐 View Live Site](https://www.fashionnights.in/)**

This is a **white-label template** of a commercial freelance project. It demonstrates a full-stack web application for managing talent discovery, brand collaborations, and community engagement using serverless architecture.

## 🎯 Project Overview

Fashion Nights is a platform that connects fashion talent, brands, and community members. This repository contains:

- **Production-Ready Frontend** (React + TypeScript + Vite)
- **Serverless Backend** (Vercel Functions + Node.js)
- **Lead Management System** (Google Sheets API)
- **Automated Email Notifications** (Nodemailer + Gmail SMTP)

The application is **fully deployed and live** at [fashionnights.in](https://www.fashionnights.in/). This template can be forked and customized for similar use cases.

## 📸 Platform Architecture & Live System Screenshots

Below are real screenshots demonstrating the **production deployment, automation workflows, and infrastructure setup** of the Fashion Nights platform.

---

### 1️⃣ Landing Page – Community Platform Interface

<p align="center">
<img src="assets/screenshots/landing-page.png" width="85%">
</p>

**Description**

This screenshot shows the **main landing interface** of the Fashion Nights platform.

Key UI components visible:

* Modern responsive **React + Tailwind layout**
* Navigation system for **Talent, Brands, and Community**
* Card-based UI components for feature discovery
* Dark theme styling with gradient UI elements
* Mobile-friendly responsive grid layout

Purpose of this page:

* Introduces the platform
* Directs users to submission forms
* Displays featured content and galleries

---

### 2️⃣ Automated Email Notification System

<p align="center">
<img src="assets/screenshots/email-automation.png" width="85%">
</p>

**Description**

This screenshot demonstrates the **automated email notification system** triggered when a user submits a form on the platform.

Technical workflow:

```
User Form Submission
        ↓
Serverless API (Vercel Functions)
        ↓
Google Sheets Data Storage
        ↓
Email Notification via Nodemailer
```

Information included in notification emails:

* User name
* Email address
* Category (Talent / Brand / Community)
* Contact details
* Additional profile data

These emails allow administrators to **instantly review new submissions without logging into a dashboard**.

⚠️ *All sensitive user data shown in this repository is demonstration data only.*

---

### 3️⃣ Production Monitoring – Vercel Observability

<p align="center">
<img src="assets/screenshots/vercel-observability.png" width="85%">
</p>

**Description**

This screenshot shows the **production monitoring dashboard provided by Vercel Observability**.

Metrics visible:

* Edge request analytics
* Serverless function activity
* Fast data transfer statistics
* Runtime compute usage
* Error and timeout monitoring

Benefits of this setup:

* Real-time monitoring of serverless APIs
* Performance analysis for user traffic
* Early detection of backend issues
* Infrastructure-level analytics

This ensures the application remains **stable and scalable in production environments**.

---

### 4️⃣ Domain & DNS Configuration

<p align="center">
<img src="assets/screenshots/dns-configuration.png" width="85%">
</p>

**Description**

This screenshot demonstrates the **domain DNS configuration used to deploy the platform to a custom domain**.

Configuration includes:

* A Record pointing root domain to hosting infrastructure
* CNAME record linking **[www.fashionnights.in](http://www.fashionnights.in)**
* Nameserver configuration via domain registrar
* DMARC TXT record for email authentication

This setup ensures:

* Proper domain routing
* Email authentication security
* Stable domain resolution
* Production-ready deployment configuration

---

## 🚀 Key Features

- ✅ **Real-Time Database:** Google Sheets API acts as both CMS and database
- ✅ **Automated Email System:** HTML-formatted emails via Nodemailer
- ✅ **Multi-Segment Forms:** Dedicated forms for Talent, Brands, and Community
- ✅ **Responsive Design:** Mobile-first UI with Tailwind CSS + Radix UI
- ✅ **Image Galleries:** Unsplash integration with fallback error handling
- ✅ **Form Validation:** Client-side validation with professional error messages
- ✅ **Loading States:** Visual feedback during form submissions
- ✅ **Toast Notifications:** Real-time success/error messages with Sonner
- ✅ **Production Optimized:** Deployed on Vercel with serverless functions

## 🛠️ Tech Stack

| Layer                  | Technology                       |
| ---------------------- | -------------------------------- |
| **Frontend Framework** | React 18 + TypeScript            |
| **Build Tool**         | Vite                             |
| **Styling**            | Tailwind CSS + PostCSS           |
| **UI Components**      | Radix UI                         |
| **Icons**              | Lucide React                     |
| **Routing**            | React Router v6                  |
| **Notifications**      | Sonner                           |
| **Animations**         | Framer Motion                    |
| **Backend Runtime**    | Node.js (Serverless)             |
| **Email Service**      | Nodemailer + Gmail SMTP          |
| **Database**           | Google Sheets API                |
| **Hosting**            | Vercel                           |
| **Form Handling**      | React Hook Form + Zod validation |

## 📁 Project Structure

```
serverless-crm-landing/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home.tsx          # Landing page with hero & galleries
│   │   │   ├── brands.tsx        # Brand partnership form
│   │   │   ├── talent.tsx        # Talent submission form
│   │   │   ├── community.tsx     # Community signup form
│   │   │   └── about.tsx         # About page
│   │   ├── components/
│   │   │   ├── header.tsx        # Navigation bar
│   │   │   ├── footer.tsx        # Footer with social links
│   │   │   ├── ui/               # Radix UI component library
│   │   │   └── figma/            # Custom image components
│   │   └── App.tsx               # Router configuration
│   ├── styles/                   # Global CSS
│   └── main.tsx                  # React entry point
├── index.html                    # HTML template
├── vercel.json                   # Vercel deployment config
├── vite.config.ts               # Vite bundler config
├── tailwind.config.js            # Tailwind CSS config
└── package.json                  # Dependencies & scripts
```

## ⚙️ Setup & Configuration

### Prerequisites

- **Node.js 16+** and npm
- **Google Cloud Account** with Sheets API enabled
- **Gmail Account** with App Password configured

### Local Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/serverless-crm-landing.git
   cd serverless-crm-landing
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env.local` file:**

   ```env
   # Google Sheets API
   VITE_GOOGLE_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
   VITE_GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   VITE_GOOGLE_SHEET_ID="your-google-sheet-id-here"

   # Email Configuration
   EMAIL_USER="your-email@gmail.com"
   EMAIL_PASS="your-gmail-app-password"
   ADMIN_EMAIL="admin@fashionnights.in"
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit: `http://localhost:5173`

### Setting Up Google Sheets Integration

1. **Create Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the **Google Sheets API**

2. **Create Service Account:**
   - Navigate to "Service Accounts"
   - Create a new service account
   - Generate a JSON key file
   - Extract `client_email` and `private_key` values

3. **Create Google Sheet:**
   - Create a new sheet for your leads
   - Share it with the service account email
   - Copy the Sheet ID from the URL

### Gmail App Password

1. Enable 2-Factor Authentication on Gmail
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Create an "App password" for this application
4. Use the generated password in `.env.local`

## 🚀 Deployment to Vercel

### Automatic Deployment

1. **Push to GitHub:**

   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Add Environment Variables:**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add all variables from your `.env.local`

4. **Deploy:**
   - Vercel automatically builds on every push to `main`

### Manual Deployment

```bash
npm i -g vercel
vercel
```

## 📊 Application Pages

| Page      | Route        | Purpose                                    |
| --------- | ------------ | ------------------------------------------ |
| Home      | `/`          | Hero section, platform overview, galleries |
| Talent    | `/talent`    | Talent portfolio submission form           |
| Brands    | `/brands`    | Brand partnership inquiry form             |
| Community | `/community` | Community membership signup                |
| About     | `/about`     | Platform information                       |

## 📝 Features in Detail

### Form Submissions

All forms include:

- Client-side validation
- Loading states with animations
- Success toast notifications
- Automatic data export to Google Sheets
- Confirmation emails sent to users

### Image Handling

- Images sourced from Unsplash API
- Lazy loading for performance
- Error fallbacks for broken images
- Responsive image sizing

### Email Notifications

Form submissions trigger automated emails with:

- Branded HTML templates
- Personalized content
- Professional formatting
- Admin notifications

## 🧪 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting (if configured)
npm run lint
```

## 🔒 Security Considerations

- ✅ Environment variables secured on Vercel
- ✅ No sensitive data in version control (use `.gitignore`)
- ✅ Service account authentication for Google APIs
- ✅ CORS properly configured
- ✅ Form validation on client and server
- ✅ Email verification recommended

## 📈 Performance

- **Lighthouse Score:** ~95+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals:** All green
- **Image Optimization:** Unsplash URLs with size parameters
- **Code Splitting:** Automatic with Vite

## 🎨 Customization

To customize for your own project:

1. Update colors in `tailwind.config.js`
2. Modify form fields in page components (`pages/talent.tsx`, etc.)
3. Change branding in `header.tsx` and `footer.tsx`
4. Update Google Sheet structure to match your needs
5. Customize email templates in serverless functions

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI Components](https://www.radix-ui.com)
- [Vercel Docs](https://vercel.com/docs)
- [Google Sheets API](https://developers.google.com/sheets/api)

## 📄 License

This project is available under the MIT License. Feel free to fork and modify for your own projects.

## 👨‍💻 Contact & Support

**Developer:** Akash K  
**Email:** [akash343k@gmail.com](mailto:akash343k@gmail.com)  
**LinkedIn:** [https://www.linkedin.com/in/akash-k-8449b828a/](https://www.linkedin.com/in/akash-k-8449b828a/)

For questions, feature requests, or customization services, feel free to reach out!

---

**Built with ❤️ using modern web technologies**
