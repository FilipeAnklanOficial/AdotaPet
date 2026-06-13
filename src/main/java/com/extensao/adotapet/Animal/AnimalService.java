package com.extensao.adotapet.Animal;

import com.extensao.adotapet.Enum.Status;
import com.extensao.adotapet.Enum.TipoUsuario;
import com.extensao.adotapet.Usuario.Usuario;
import com.extensao.adotapet.Usuario.UsuarioRepository;
import com.extensao.adotapet.UsuarioONG.UsuarioONG;
import com.extensao.adotapet.UsuarioONG.UsuarioONGRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository repository;

    @Autowired
    private UsuarioONGRepository usuarioONGRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public AnimalResponseDTO cadastrarAnimal(AnimalRequestDTO data){
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        UsuarioONG ong = usuarioONGRepository.findByUsuario(usuario)
                .orElseThrow(() -> new RuntimeException("ONG não encontrada para este usuário"));

        if (!usuario.getTipoUsuario().equals(TipoUsuario.ROLE_ONG)) {
            throw new RuntimeException("Apenas ONG pode cadastrar animais");
        }

        Animal animalData = new Animal(data);
        animalData.setOng(ong);
        repository.save(animalData);
        return new AnimalResponseDTO(animalData);
    }

    public List<AnimalResponseDTO> getAll() {
        return repository.findAll()
                .stream()
                .map(AnimalResponseDTO::new)
                .toList();
    }

    public AnimalResponseDTO getById(Long id){
        Animal animal = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal não encontrado"));
        return new AnimalResponseDTO(animal);
    }

    public void deleteById(Long id){
        Animal animal = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal não encontrado"));
        repository.delete(animal);
    }

    @PutMapping("/{id}/inativar")
    public void inativar(@PathVariable Long id){
        Animal animal = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal não encontrado"));
        animal.setStatus(Status.INATIVO);
        repository.save(animal);
    }

    @PutMapping("/{id}/ativar")
    public void ativar(@PathVariable Long id){
        Animal animal = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal não encontrado"));
        animal.setStatus(Status.DISPONIVEL);
        repository.save(animal);
    }

    public AnimalResponseDTO atualizaParcial(Long id, AnimalUpdateDTO dto) {
        Animal animal = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal não encontrado"));

        if (animal.getStatus() == Status.ADOTADO || animal.getStatus() == Status.INATIVO) {
            throw new RuntimeException("Não é possível editar um Animal Adotado ou Inativo");
        }
        if (dto.getNome() != null) {
            animal.setNome(dto.getNome());
        }
        if (dto.getRaca() != null) {
            animal.setRaca(dto.getRaca());
        }
        if (dto.getIdade() != null) {
            animal.setIdade(dto.getIdade());
        }
        if (dto.getHistoricoSaude() != null) {
            animal.setHistoricoSaude(dto.getHistoricoSaude());
        }
        if (dto.getComportamento() != null) {
            animal.setComportamento(dto.getComportamento());
        }
        if (dto.getFotos() != null) {
            animal.setFotos(dto.getFotos());
        }
        if (dto.getPossuiChip() != null) {
            animal.setPossuiChip(dto.getPossuiChip());
        }
        if (dto.getLocalizacao() != null) {
            animal.setLocalizacao(dto.getLocalizacao());
        }
        if (dto.getVacinado() != null) {
            animal.setVacinado(dto.getVacinado());
        }
        if (dto.getEspecie() != null){
            animal.setEspecie(dto.getEspecie());
        }
        if (dto.getPorte() != null){
            animal.setPorte(dto.getPorte());
        }
        if (dto.getSexo() != null){
            animal.setSexo(dto.getSexo());
        }
        if (dto.getStatus() != null){
            animal.setStatus(dto.getStatus());
        }
        repository.save(animal);
        return new AnimalResponseDTO(animal);
    }


}
