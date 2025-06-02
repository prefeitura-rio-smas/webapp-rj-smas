"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface text-foreground py-7">
      <div className="container mx-auto text-center text-sm leading-relaxed">
        <span className="font-bold">
          Prefeitura da Cidade do Rio de Janeiro | Secretaria Municipal de Assistência Social
        </span>
        <br />
        <span className="font-bold">
          Contatos:
        </span>{" "}
        gdados.smas@prefeitura.rio | (21) 2976-1221
        <br />
        <span className="font-bold">
          Endereço:
        </span>{" "}
        Rua Afonso Cavalcanti, 455 | Sala 548 | CASS - Cidade Nova
      </div>
    </footer>
  );
};

export default Footer;
