package com.extensao.adotapet.Animal;

import com.extensao.adotapet.Enum.Especie;
import com.extensao.adotapet.Enum.Porte;
import com.extensao.adotapet.Enum.Sexo;
import com.extensao.adotapet.Enum.Status;

public record AnimalResponseDTO(Long id,
                                String nome,
                                String raca,
                                double idade,
                                String historicoSaude,
                                String comportamento,
                                String fotos,
                                boolean possuiChip,
                                String localizacao,
                                boolean vacinado,
                                Long ongId,
                                String nomeOng,
                                Especie especie,
                                Porte porte,
                                Sexo sexo,
                                Status status) {
    public AnimalResponseDTO(Animal animal){
        this(animal.getId(),
                animal.getNome(),
                animal.getRaca(),
                animal.getIdade(),
                animal.getHistoricoSaude(),
                animal.getComportamento(),
                animal.getFotos(),
                animal.isPossuiChip() ,
                animal.getLocalizacao(),
                animal.isVacinado(),
                animal.getOng().getId(),
                animal.getOng().getNome(),
                animal.getEspecie(),
                animal.getPorte(),
                animal.getSexo(),
                animal.getStatus());
    }
}
