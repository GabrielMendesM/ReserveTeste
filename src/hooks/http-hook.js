import { useCallback, useRef, useState, useEffect } from "react";

export const useHttpClient = () => {
    const [isCarregando, setIsCarregando] = useState(false);
    const [erro, setErro] = useState();

    const activeHttpRequests = useRef([]);

    const enviarRequest = useCallback(async (url, method='GET', body=null, headers={}) => {
        setIsCarregando(true);
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);

        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
            });
    
            const responseDados = await response.json();

            activeHttpRequests.current = activeHttpRequests.current.filter(reqCtrl => reqCtrl !== httpAbortCtrl);

            if (!response.ok) {
                throw new Error(responseDados.message);
            }    
        
            setIsCarregando(false);
            return responseDados;
        } catch (err) {
            setErro('Failed to fetch' === err.message ? 'Ocorreu um erro ao tentar conectar. Por favor, entre em contato com o suporte.' : err.message);
            setIsCarregando(false);
            throw err;
        }
    }, []);

    const definirErro = (err) => {
        setErro(err);
    };

    const limparErro = () => {
        setErro(null);
    };

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
        };
    }, []);

    return { isCarregando, erro, enviarRequest, definirErro, limparErro };
};
