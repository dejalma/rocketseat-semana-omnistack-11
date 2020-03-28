import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import LogoImg from '../../assets/logo.svg'

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be the Hero" />

          <h1>Cadastrar novo caso</h1>

          <p>Descreva o caso detalhadamente para encontrar um herói para salvar o dia.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descriçao" />
          <input placeholder="Valor (R$)" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
