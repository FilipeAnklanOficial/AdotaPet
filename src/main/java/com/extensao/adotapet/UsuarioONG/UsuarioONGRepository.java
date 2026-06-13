package com.extensao.adotapet.UsuarioONG;

import com.extensao.adotapet.Usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioONGRepository extends JpaRepository<UsuarioONG, Long> {
    Optional<UsuarioONG> findByUsuario(Usuario usuario);
}