import { Container, Content } from './styles';
import { Api } from '../../services/api';
import * as Yup from 'yup';
import Input from '../Form/Input';
import { useRef } from 'react';
import { useUser } from '../../context/User';
import {useHistory} from 'react-router-dom'

export function EditUser() {

    const formRef = useRef(null);
    const { user } = useUser();
    let name;
    let history = useHistory();

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
            console.log(data);
            Api.put('http://localhost:3001/users/' +user[1],  data );
            formRef.current.setErrors({});
            reset();
            history.push('/');
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
            {console.log(user[1])}
            <div>
                <Content ref={formRef} onSubmit={handleSubmit}>
                    <strong align="center">Alterar Usuário</strong>
                    <Input defaultValue={user[1]} name="name" />
                    <Input name="age" size="2" maxLength="2" defaultValue={user[3]}/>
                    <Input name="email" defaultValue={user[4]}/>
                    <Input name="cpf" size="11" maxLength="11" defaultValue={user[2]}/>                   

                    <button type="submit"> Enviar </button>
                </Content >
            </div>
        </Container>
    );
}