package com.extensao.adotapet.UsuarioONG;

import com.extensao.adotapet.Usuario.Usuario;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "usuarioOng")
@Table(name = "usuarioOng")
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

    @OneToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

}
