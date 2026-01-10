import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Database, Globe, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>KenSaku</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
            <Link href="#about-us" className="hover:text-foreground transition-colors">
              About us
            </Link>
            <Link href="#features" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/auth/signin">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="#about-us" className="py-24 md:py-32 border-b">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
              The simple search platform for your data.
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Create custom search pages, import your data, and provide convenient search experiences for everyone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="px-8 py-6 text-lg rounded-full">
                  Start Building <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full bg-transparent">
                Start Searching
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Search Pages</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create and customize search pages with simple, intuitive steps — no coding required.
                </p>
              </div>
              <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Data Import</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Import data in just a few clicks — upload files or connect sources effortlessly.
                </p>
              </div>
              <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Convenient Search</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Search information quickly with a simple and user-friendly interface.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 flex justify-center items-center text-sm text-muted-foreground">
            &copy; 2026 KenSaku Platform. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
