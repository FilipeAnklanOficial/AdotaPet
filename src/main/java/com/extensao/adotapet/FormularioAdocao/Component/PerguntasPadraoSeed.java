package com.extensao.adotapet.FormularioAdocao.Component;

import com.extensao.adotapet.Enum.TipoPergunta;
import com.extensao.adotapet.FormularioAdocao.Entity.PerguntaPadrao;
import com.extensao.adotapet.FormularioAdocao.Repository.PerguntaPadraoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PerguntasPadraoSeed implements CommandLineRunner {

    @Autowired
    private PerguntaPadraoRepository repository;

    @Override
    public void run(String... args){

        if(repository.count() > 0) return;

        repository.saveAll(List.of(
                new PerguntaPadrao("Você possui quintal?", TipoPergunta.BOOLEAN),
                new PerguntaPadrao("Reside em casa, apartamento ou outro?", TipoPergunta.TEXTO),
                new PerguntaPadrao("Possui outros animais?", TipoPergunta.BOOLEAN),
                new PerguntaPadrao("Todos os moradores concordam com a adoção?", TipoPergunta.BOOLEAN),
                new PerguntaPadrao("Quantas horas o animal ficará sozinho por dia?", TipoPergunta.TEXTO),
                new PerguntaPadrao("Já teve animais antes?", TipoPergunta.BOOLEAN),
                new PerguntaPadrao("Possui condições financeiras para cuidados veterinários?", TipoPergunta.BOOLEAN),
                new PerguntaPadrao("O animal terá acesso à área interna da casa?", TipoPergunta.BOOLEAN),
                new PerguntaPadrao("Pretende vacinar e vermifugar regularmente?", TipoPergunta.BOOLEAN),
                new PerguntaPadrao("Já teve algum animal perdido/fugido?", TipoPergunta.BOOLEAN)
        ));
    }
}
