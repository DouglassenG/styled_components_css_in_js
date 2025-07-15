import { FormEvent, useState, ChangeEvent } from 'react'
import { Formulario, Campo, Botao } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoMudarInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase()) // envia o termo para o componente pai
  }

  return (
    <Formulario>
      <Campo />
      <Botao>Pesquisar</Botao>
    </Formulario>
  )
}

export default FormVagas
