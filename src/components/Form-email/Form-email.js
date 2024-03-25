
export default function FormEmail(){
    return (
        <div className="form">
            <h4>Fale Conosco</h4>
        <form>
            <div class="col">
                <label for="formGroupExampleInput">Nome: </label>
                <input type="text" class="form-control" placeholder="Nome"/>
            </div>
            <div class="col">
                <label for="formGroupExampleInput">Sobrenome: </label>
                <input type="text" class="form-control" placeholder="Sobrenome"/>
            </div>
            <div class="col">
                <label for="exampleFormControlInput1">Endereço de email: </label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com"/>
            </div>
            <div class="col">
                <label for="formGroupExampleInput">Assunto: </label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="assunto"/>
            </div>
        <div class="col">
            <label for="exampleFormControlTextarea1">Deixe a sua mensagem</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <div class="col button">
            <button type="submit"class="btn btn-secondary btn-md">Enviar</button>
        </div>
        </form>
        </div>
)}