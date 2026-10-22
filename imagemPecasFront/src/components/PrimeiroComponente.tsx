'use client'
export function PrimeiroComponente(){
    
    function handleClick(){
        console.log("Cliquei no boão");
    }
    
    return(
        <div>
            Primeiro Componente Turma B

            <button onClick={handleClick}>Clique aqui</button>
        </div>
    );
}