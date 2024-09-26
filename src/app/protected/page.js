// src/app/protected/page.js
"use client";  // Isso garante que o componente seja tratado como Client Component

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function ProtectedPage() {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">MyApp</div>
          <SignedIn>
            <div className="logout">Sair</div>
          </SignedIn>
        </nav>
      </header>

      <main>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <section className="protected-section">
            <h1>Área Protegida</h1>
            <p>Bem-vindo! Aqui estão seus dados e informações confidenciais.</p>
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

        .logout {
          cursor: pointer;
        }

        main {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f4f4f4;
        }

        .protected-section {
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
