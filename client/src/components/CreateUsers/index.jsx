import { Container, Content } from './styles';
import { Api } from '../../services/api';
import * as Yup from 'yup';
import Input from '../Form/Input';
import { useRef } from 'react';

export function CreateUser() {

    const formRef = useRef(null);

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório.'),
                email: Yup.string().required('O email é obrigatório.'),
                age: Yup.number().required('A idade é obrigatória.').min(18),
                cpf: Yup.number().required('O cpf é obrigatório.'),               
            });

            await schema.validate(data, {
                abortEarly: false,
            });
            Api.post('http://localhost:3001/users',  data );
            formRef.current.setErrors({});
            reset();

        } catch (err) {

            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                });

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <Container>
            <div>
                <Content ref={formRef} onSubmit={handleSubmit}>
                    <strong align="center">Informações Pessoais</strong>
                    <Input name="name" placeholder="Name" />
                    <Input name="age" size="2" maxLength="2" placeholder="Age" />
                    <Input name="email" placeholder="Email" />
                    <Input name="cpf" size="11" maxLength="11" placeholder="CPF" />
                    

                    <button type="submit"> Enviar </button>
                </Content >
            </div>
        </Container>
    );
}