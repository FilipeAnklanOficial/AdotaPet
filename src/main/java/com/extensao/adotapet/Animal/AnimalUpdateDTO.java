package com.extensao.adotapet.Animal;

import com.extensao.adotapet.Enum.Especie;
import com.extensao.adotapet.Enum.Porte;
import com.extensao.adotapet.Enum.Sexo;
import com.extensao.adotapet.Enum.Status;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnimalUpdateDTO {
    private long id;
    private String nome;
    private String raca;
    private Double idade;
    private String historicoSaude;
    private String comportamento;
    private String fotos;
    private Boolean possuiChip;
    private String localizacao;
    private Boolean vacinado;

    @Enumerated(EnumType.STRING)
    private Especie especie;

    @Enumerated(EnumType.STRING)
    private Porte porte;

    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @Enumerated(EnumType.STRING)
    private Status status;
}
