# AI Startup-Idea Evaluator (React/Next.js)

A modern, interactive web application that evaluates startup ideas using AI. Built with Next.js, React, TypeScript, and shadcn/ui, featuring a sleek design with dynamic animations and real-time feedback.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism design with gradient backgrounds and smooth animations
- **Real-time Evaluation**: AI-powered startup idea analysis
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Feedback**: Loading animations and status updates
- **Professional Styling**: Custom color palette with modern aesthetics
- **Canvas Effects**: Three.js powered animated background effects
- **TypeScript**: Full type safety and better development experience

## 🎨 Design

The application uses a carefully crafted color palette:
- **Primary**: `#000000` (Black)
- **Secondary**: `#C0C0C0` (Silver)
- **Accent 1**: `#04045E` (Dark Blue)
- **Accent 2**: `#023E89` (Medium Blue)
- **Accent 3**: `#3E84C6` (Light Blue)

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library
- **Framer Motion**: Smooth animations
- **Three.js**: 3D graphics and effects
- **@react-three/fiber**: React renderer for Three.js

## 📱 Live Demo

Visit the live application: [Your GitHub Pages URL will appear here after deployment]

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/startup-idea-evaluator.git
   cd startup-idea-evaluator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Usage

1. Enter your startup idea in the input field
2. Click the send button or press Enter
3. Wait for the AI analysis to complete
4. Review the detailed evaluation results
5. Use the "New Chat" button to start over

## 🌐 Deployment

This project is configured for various deployment platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### GitHub Pages
1. Push your code to GitHub
2. Go to your repository settings
3. Enable GitHub Pages in the "Pages" section
4. Select the main branch as source

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

## 📁 Project Structure

```
startup-idea-evaluator/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── separator.tsx
│   │   │   └── canvas-effect.tsx
│   │   └── chatbot.tsx     # Main chatbot component
│   └── lib/                # Utility functions
│       └── utils.ts
├── public/                 # Static assets
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Global styles are in `src/app/globals.css`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for optimal user experience
- Optimized for performance and accessibility
- Powered by Three.js for stunning visual effects

---

**Note**: This application requires an active webhook endpoint for AI evaluation functionality. Make sure your endpoints are properly configured and accessible.

## 🔄 Migration from HTML

This project was migrated from a simple HTML file to a full React/Next.js application while preserving all core functionality:

- ✅ **API Endpoints**: All webhook URLs preserved
- ✅ **Core Logic**: Evaluation flow unchanged
- ✅ **Response Handling**: Same data processing
- ✅ **Error Handling**: Enhanced with better UX
- ✅ **Visual Design**: Upgraded with modern UI components
