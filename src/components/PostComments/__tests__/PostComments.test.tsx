import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
})

test('Deve renderizar os 2 comentarios', () => {
render(<PostComment />)

    const campoTexto = screen.getByTestId('textarea')
    const botao = screen.getByTestId('btn-submittest')


fireEvent.change(campoTexto, {
    target: {
        value: 'Muito bem!'
    }
})

fireEvent.click(botao)
expect(screen.getByText('Muito bem!')).toBeInTheDocument()

fireEvent.change(campoTexto, {
    target: {
        value: 'Sucesso!'
    }
})

fireEvent.click(botao)
expect(screen.getByText('Sucesso!')).toBeInTheDocument()

const comentariosTotais = screen.getAllByTestId('comment')

expect(comentariosTotais).toHaveLength(2)

})
});