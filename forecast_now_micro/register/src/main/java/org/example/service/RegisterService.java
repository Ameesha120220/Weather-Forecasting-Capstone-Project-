package org.example.service;

import org.example.domain.FavoritesLocation;
import org.example.domain.Register;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface RegisterService {

    Register registerUser(Register user);


    Register getUserByUsername(String username);

    FavoritesLocation addFav(FavoritesLocation favoritesLocation);

    List<FavoritesLocation> getAllFav();

    List<FavoritesLocation> getFavById(int id);

    void deleteByFavouriteId(int favId);

    Optional<Register> findUserById(int userId);
}
