import { useContext } from 'react';
import { VscGithubInverted} from 'react-icons/vsc';
import styles from "./style.module.scss";
import { AuthContext } from '../../contexts/auth';

export function LoginBox () {
    const { signInUrl } = useContext(AuthContext);

    return (
        <div className={styles.LoginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className= {styles.signInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com Github 
            </a>
        </div>
    )
}