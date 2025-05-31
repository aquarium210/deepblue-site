import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepblue Studio",
  description: "Building Foundations to Frontiers from Counting to Calculus.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 bg-white border-b z-50 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-700 hover:text-blue-900 transition hover:underline underline-offset-4 shadow-sm">
              Deepblue Studio
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link href="/testimonials" className="flex items-center gap-1 hover:text-blue-600 transition hover:underline underline-offset-4 shadow-sm">
                <span>📣</span>Testimonials
              </Link>
              <Link href="/r2u" className="flex items-center gap-1 hover:text-blue-600 transition hover:underline underline-offset-4 shadow-sm">🎓 Road to University</Link>
              <Link href="/blog" className="flex items-center gap-1 hover:text-blue-600 transition hover:underline underline-offset-4 shadow-sm">
                <span>📚</span>Blog
              </Link>
              <a href="https://www.linkedin.com/in/danieljshen/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-600 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/deepblue.gallery/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@Deepblue.Studio" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-600 transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </header>

        <main className="pt-20">{children}</main>

        <footer className="mt-20 bg-gray-100 border-t text-center py-6 text-sm text-gray-600 space-y-2">
          <p>Building Foundations to Frontiers from Counting to Calculus.</p>
          <div className="flex justify-center gap-6">
            <a href="/r2u" className="hover:text-blue-600 transition underline text-sm">🎓 Road to University</a>
            <a href="https://www.linkedin.com/in/danieljshen/" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-600 transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/deepblue.gallery/" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-600 transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@Deepblue.Studio" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-600 transition">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Deepblue Studio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
