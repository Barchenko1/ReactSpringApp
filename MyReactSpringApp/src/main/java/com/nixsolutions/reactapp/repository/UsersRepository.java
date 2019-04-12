package com.nixsolutions.reactapp.repository;

import com.nixsolutions.reactapp.domain.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<Users, Long> {

    Users findUsersById(Long id);

    Users findUsersByLogin(String login);

    void deleteById(Long id);
}
