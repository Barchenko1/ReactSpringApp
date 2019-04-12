package com.nixsolutions.reactapp.service;

import com.nixsolutions.reactapp.domain.Roles;
import com.nixsolutions.reactapp.domain.Users;
import com.nixsolutions.reactapp.repository.RolesRepository;
import com.nixsolutions.reactapp.repository.UsersRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@Slf4j
public class UsersService {

    private final UsersRepository usersRepository;

    private final RolesRepository rolesRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository, RolesRepository rolesRepository) {
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
    }

    public Users saveUser(Users user) {
        if (user == null) {
            log.error("User == null", new NullPointerException());
            throw new NullPointerException();
        }
        Users userInDB = findUserByLogin(user.getLogin());
        if (userInDB != null){
            log.error("User(id) == user in db, sorry", new NullPointerException());
            throw new IllegalArgumentException();
        }
        try {
            log.trace("Call saveUser");
            usersRepository.save(user);
        } catch (Exception e) {
            log.error("Error in time save user", e);
            throw e;
        }
        return user;
    }

    public Users updateUser(Users user){
        if (user == null) {
            log.error("User == null", new NullPointerException());
            throw new NullPointerException();
        }
        Users userToUpdate = findUserById(user.getId());
        userToUpdate.setLogin(user.getLogin());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setBirthday(user.getBirthday());
        userToUpdate.setSalary(user.getSalary());
        userToUpdate.setRole(user.getRole());
        usersRepository.save(userToUpdate);
        return userToUpdate;
    }

    public Iterable<Users> findAll() {
        try {
            log.trace("Call method findAll");
            return usersRepository.findAll();
        } catch (Exception e) {
            log.error("Error in time findAll", e);
            throw e;
        }
    }

    public void deleteUser(Long id) {
        if (id == null) {
            log.error("User(id) == null", new NullPointerException());
            throw new NullPointerException();
        }
        try {
            log.trace("Call method deleteUserById");
            usersRepository.deleteById(id);
        } catch (Exception e) {
            log.error("Error in time deleteUserById", e);
            throw e;
        }
    }

    public Users findUserById(Long id) {
        if (id == null) {
            log.error("User(id) == null", new NullPointerException());
            throw new NullPointerException();
        }
        try {
            log.trace("Call method findUserById");
            return usersRepository.findUsersById(id);
        } catch (Exception e) {
            log.error("Error in time findUserById", e);
            throw e;
        }
    }

    public Users findUserByLogin(String login) {
        if (login == null) {
            log.error("User(id) == null", new NullPointerException());
            throw new NullPointerException();
        }
        try {
            log.trace("Call method findUserByLogin");
            return usersRepository.findUsersByLogin(login);
        } catch (Exception e) {
            log.error("Error in time findUserByLogin", e);
            throw e;
        }
    }
}
