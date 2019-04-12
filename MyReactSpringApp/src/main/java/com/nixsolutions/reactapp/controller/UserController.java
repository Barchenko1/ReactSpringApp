package com.nixsolutions.reactapp.controller;

import com.nixsolutions.reactapp.domain.Roles;
import com.nixsolutions.reactapp.domain.Users;
import com.nixsolutions.reactapp.repository.RolesRepository;
import com.nixsolutions.reactapp.service.RolesService;
import com.nixsolutions.reactapp.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/reactapp")
public class UserController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private RolesService rolesService;

    @PostMapping("/user")
    public Users saveUser(@RequestBody Users user){
        return usersService.saveUser(user);
    }

    @PostMapping("/role")
    public Roles saveRole(@RequestBody Roles role){
        return rolesService.saveRole(role);
    }

    @GetMapping("/allUsers")
    public Iterable<Users> usersList() {
        return usersService.findAll();
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Long id){
        return usersService.findUserById(id);
    }

    @GetMapping("/allRoles")
    public Iterable<Roles> rolesList() {
        return rolesService.findAll();
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        usersService.deleteUser(userId);
    }

    @PutMapping("/update/{id}")
    public Users updateUserById(@PathVariable Long id, @RequestBody Users users){
        users.setId(id);
        return usersService.updateUser(users);
    }
}
