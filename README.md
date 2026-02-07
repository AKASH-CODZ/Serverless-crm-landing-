# Serverless Event CRM & Landing Page

A high-performance landing page featuring a custom serverless backend. It captures leads, processes them via Google Sheets API, and sends automated, formatted HTML emails using Nodemailer—all hosted on Vercel.

## 🚀 Key Features

- **Real-Time Database:** Direct integration with Google Sheets API (acts as a CMS/Database).
- **Automated Communication:** Custom HTML email triggers via Nodemailer (Gmail SMTP).
- **Dynamic Forms:** Multi-step forms for "Talent", "Brand", and "Community" segments.
- **Performance:** Optimized React/Vite architecture with responsive Tailwind CSS design.
- **Production Ready:** Deployed on Vercel with serverless functions and API routes.

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + PostCSS
- **UI Components:** Radix UI (accessible component library)
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Notifications:** Sonner (toast notifications)

### Backend

- **Runtime:** Node.js (Serverless Functions)
- **Email Service:** Nodemailer with Gmail SMTP
- **Data Storage:** Google Sheets API integration
- **Deployment:** Vercel Functions

### Infrastructure

- **Hosting:** Vercel (Frontend + Serverless)
- **Database:** Google Sheets (Lead Management)
- **Email:** Gmail SMTP (Automated Notifications)

## 📋 Project Structure

```
.
├── index.html                    # HTML entry point
├── src/
│   ├── main.tsx                 # React DOM render
│   ├── app/
│   │   ├── App.tsx              # Main router component
│   │   ├── components/          # Reusable React components
│   │   │   ├── header.tsx       # Navigation header
│   │   │   ├── footer.tsx       # Footer with social links
│   │   │   ├── ui/              # Radix UI component library
│   │   │   └── figma/           # Custom components
│   │   └── pages/               # Route pages
│   │       ├── home.tsx         # Landing page
│   │       ├── about.tsx        # About section
│   │       ├── talent.tsx       # Talent registration form
│   │       ├── brands.tsx       # Brand registration form
│   │       └── community.tsx    # Community section
│   └── styles/                  # Global styles
├── vercel.json                  # Vercel deployment config
├── vite.config.ts              # Vite bundler config
└── package.json                # Dependencies & scripts
```

## 🔧 Setup & Configuration

### Prerequisites

- Node.js 16+ and npm
- Google Cloud Account with Service Account credentials
- Gmail account with App Password enabled

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/serverless-crm-landing.git
   cd serverless-crm-landing
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your credentials (see below)

4. **Run development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Environment Variables

Create a `.env.local` file with the following:

```env
# Google Sheets API Configuration
GOOGLE_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
GOOGLE_SHEET_ID="your-google-sheet-id"

# Email Configuration
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-gmail-app-password"
ADMIN_EMAIL="notifications@example.com"
```

**Getting Google Credentials:**

1. Create a Google Cloud project
2. Enable the Google Sheets API
3. Create a Service Account and download the JSON key
4. Extract `client_email` and `private_key` from the key file

**Gmail App Password:**

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate an app-specific password for your app

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Vercel will automatically:

- Build the project
- Deploy serverless functions
- Set environment variables from `.env.local`

### Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add all variables from `.env.local`

## 📊 Features in Detail

### Lead Capture

- Multi-step forms collect talent, brand, and community information
- Form validation and error handling
- Real-time toast notifications for user feedback

### Google Sheets Integration

- Leads are automatically saved to a Google Sheet
- Acts as both database and admin dashboard
- Easy to query and analyze lead data

### Email Notifications

- Automated welcome emails to leads
- Formatted HTML emails with branding
- Admin notifications for new submissions

### Responsive Design

- Mobile-first Tailwind CSS design
- Works on all screen sizes
- Accessible components using Radix UI

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📈 Performance

- Lighthouse Score: 100/100 (Accessibility, Best Practices)
- Fast Core Web Vitals
- Optimized images from Unsplash
- Minified CSS and JavaScript

## 🔒 Security

- Environment variables stored securely on Vercel
- No sensitive data in version control
- Google Sheets API uses service account authentication
- CORS-enabled for frontend-backend communication

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a demonstration of modern full-stack web development with serverless architecture.

---

**[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/serverless-crm-landing)**
