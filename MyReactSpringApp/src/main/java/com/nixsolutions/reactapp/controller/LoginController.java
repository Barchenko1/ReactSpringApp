package com.nixsolutions.reactapp.controller;

import com.nixsolutions.reactapp.domain.Users;
import com.nixsolutions.reactapp.dto.LoginForm;
import com.nixsolutions.reactapp.dto.LoginValidator;
import com.nixsolutions.reactapp.dto.RegistrationDTO;
import com.nixsolutions.reactapp.dto.ResponseLogin;
import com.nixsolutions.reactapp.service.UsersService;
import com.nixsolutions.reactapp.utils.GenerateToken;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    private UsersService usersService;

    private GenerateToken generateToken;

//    private PasswordEncoder passwordEncoder;


    @PostMapping("/registration")
    public Users regUser(@RequestBody RegistrationDTO registrationDTO){
        Users user = registrationDTO.createUserFromDTO();
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return usersService.saveUser(user);
    }

    @PostMapping("/login")
    public ResponseLogin login(@RequestBody LoginForm loginForm){
        Users userLogin = usersService.findUserByLogin(loginForm.getLogin());
        if (userLogin == null){
            return new ResponseLogin();
        }
        /*if (passwordEncoder.matches(loginForm.getLogin(), loginForm.getPassword())) {
            return new ResponseLogin(
                    userLogin.getLogin(),
                    generateToken.generateToken(loginForm),
                    userLogin.getRole());
        } else {
            return new ResponseLogin();
        }*/
        return new ResponseLogin(
                userLogin.getLogin(),
                generateToken.generateToken(loginForm),
                userLogin.getRole());
    }

    @GetMapping("/checkLogin/{login}")
    public LoginValidator checkLogin(@PathVariable String login) {
        if (usersService.findUserByLogin(login) == null) {
            return new LoginValidator(true);
        } else {
            return new LoginValidator(false);
        }
    }

}
