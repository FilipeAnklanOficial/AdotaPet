package com.extensao.adotapet.Animal;

import com.extensao.adotapet.Enum.Especie;
import com.extensao.adotapet.Enum.Porte;
import com.extensao.adotapet.Enum.Sexo;
import com.extensao.adotapet.Enum.Status;

public record AnimalRequestDTO(String nome,
                               String raca,
                               double idade,
                               String historicoSaude,
                               String comportamento,
                               String fotos,
                               boolean possuiChip,
                               String localizacao,
                               boolean vacinado,
                               Especie especie,
                               Porte porte,
                               Sexo sexo,
                               Status status,
                               String cor) {
}
