package com.extensao.adotapet.Controller;

import com.extensao.adotapet.UsuarioONG.UsuarioONGRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("usuarioOng")
public class UsuarioONGController {

    @Autowired
    private UsuarioONGRepository repository;
}

