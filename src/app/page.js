// src/app/page.js
"use client";  // Isso força o Next.js a tratar este componente como Client Component

import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">MyApp</div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>

      <main>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <section className="welcome-section">
            <h1>Bem-vindo ao MyApp</h1>
            <p>Gerencie sua conta e explore a plataforma.</p>
          </section>
        </SignedIn>
      </main>

      <footer>
        <p>© 2024 MyApp. Todos os direitos reservados.</p>
      </footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        header {
          background-color: #0070f3;
          color: white;
          padding: 1rem 2rem;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
        }

        main {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f4f4f4;
        }

        .welcome-section {
          text-align: center;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 36px;
          margin-bottom: 1rem;
        }

        p {
          font-size: 18px;
          color: #666;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background-color: #0070f3;
          color: white;
        }
      `}</style>
    </div>
  );
}
