# 🔒 AnonBox

**Professional anonymous feedback platform** - Share honest workplace feedback without revealing your identity to help improve team dynamics and communication.

[![AnonBox](https://img.shields.io/badge/AnonBox-Professional%20Feedback-blue?style=for-the-badge&logo=message-circle)](https://www.anonbox.tech)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/HimanshuTamoli/anonbox.git
cd anonbox
npm install

# Setup Environment
cp .env.example .env.local
# Add your MongoDB URI, NextAuth secret, and Resend API key

# Run Development Server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎯

## 📱 How It Works

```mermaid
graph TD
    A[Team Member Signs Up] --> B[Gets Unique Feedback Link]
    B --> C[Shares Link with Colleagues]
    C --> D[Colleagues Send Anonymous Feedback]
    D --> E[User Receives Feedback in Dashboard]
    E --> F[User Can Review/Act on Feedback]
    
    G[Feedback Sender] --> H[Visits Colleague's Link]
    H --> I[Provides Anonymous Feedback]
    I --> J[Sends Professional Feedback]
    J --> K[Identity Remains Protected]
```

## ✨ Features

- 🔒 **Anonymous Feedback** - Share honest insights without revealing identity
- 👤 **Professional Profiles** - Get your own anonbox.tech/u/username link
- 📊 **Impact Analytics** - Track feedback engagement and trends
- 🎨 **Clean Interface** - Professional, intuitive design
- ⚡ **Real-time Updates** - Instant feedback notifications
- 🛡️ **Safety First** - Zero tolerance for abuse or harassment

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: MongoDB with Mongoose
- **Email**: Resend
- **Deployment**: Vercel

## 📁 Project Structure

```
anonbox/
├── src/app/           # Next.js App Router
├── src/components/    # React Components
├── src/lib/          # Utilities & Config
├── src/models/       # Database Models
└── public/           # Static Assets
```

## 🔧 Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
RESEND_API_KEY=your_resend_api_key
```

## 🚀 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HimanshuTamoli/anonbox)

## 🎯 Use Cases

- **Team Improvement** - Gather honest feedback about team processes
- **Leadership Development** - Receive anonymous input on management style
- **Workplace Culture** - Identify areas for organizational improvement
- **Project Retrospectives** - Collect candid project feedback
- **Communication Enhancement** - Improve team dynamics safely

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

<div align="center">

**Built for better workplaces by [HimanshuTamoli](https://github.com/HimanshuTamoli)**

[🌐 Website](https://www.anonbox.tech) • [📧 Support](mailto:support@anonbox.tech)

</div>