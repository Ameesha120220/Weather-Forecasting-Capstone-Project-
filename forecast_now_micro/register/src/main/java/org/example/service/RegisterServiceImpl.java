package org.example.service;

import org.example.domain.FavoritesLocation;
import org.example.domain.Register;
import org.example.repository.FavoritesRepo;
import org.example.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterServiceImpl implements RegisterService{
    @Autowired
    FavoritesRepo favoritesRepo;

    @Autowired
    RegisterRepository registerRepository;


    @Override
    public Register registerUser(Register user) {
        Register userSaved = registerRepository.save(user);
        return userSaved;
    }

    @Override
    public Register getUserByUsername(String username) {
        return registerRepository.findByUsername(username);
    }
    @Override
    public FavoritesLocation addFav(FavoritesLocation favoritesLocation) {
        return favoritesRepo.save(favoritesLocation);
    }

    @Override
    public List<FavoritesLocation> getAllFav() {
        return favoritesRepo.findAll();
    }

    @Override
    public List<FavoritesLocation> getFavById(int id) {
        return favoritesRepo.findAllByUserId(id);
    }

    @Override
    public void deleteByFavouriteId(int favId
    ) {
        favoritesRepo.deleteById(favId);
    }

    @Override
    public Optional<Register> findUserById(int userId) {
        return registerRepository.findById(userId);
    }
}
