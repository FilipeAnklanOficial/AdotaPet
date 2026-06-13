package com.extensao.adotapet.UsuarioONG;

import com.extensao.adotapet.Animal.Animal;
import com.extensao.adotapet.Usuario.Usuario;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Table(name = "usuario_ong")
@Entity(name = "usuario_ong")
@Getter
@Setter
@NoArgsConstructor
public class UsuarioONG {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String endereco;

    @OneToMany(mappedBy = "ong")
    private List<Animal> animais;

    @OneToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

}
