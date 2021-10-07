import { Content } from './styles';

export function Header() {
    return (
        <Content>
            {/* <button>
                <a href="/"> Inicio</a>
            </button> */}
            <button>
                <a href="/create-user"> Cadastrar</a>
            </button>
            <button>
                <a href="/"> Listar</a>
            </button>
        </Content>
    );
}