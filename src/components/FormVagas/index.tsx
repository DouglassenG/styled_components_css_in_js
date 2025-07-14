import { FormEvent, useState, ChangeEvent } from 'react'
import { Formulario, Campo, Botao } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  const aoMudarInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={aoMudarInput}
        type="search"
        value={termo}
      />
      <Botao type="submit">Pesquisar</Botao>
    </Formulario>
  )
}

export default FormVagas
