package com.nixsolutions.reactapp.dto;

import com.nixsolutions.reactapp.domain.Roles;
import com.nixsolutions.reactapp.domain.Users;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegistrationDTO {
    private String login;
    private String password;
    private String confirmPassword;
    private String email;
    private String firstName;
    private String lastName;
    private Date birthday;
    private Roles role;

    public Users createUserFromDTO(){
        return Users.builder()
                .login(login)
                .password(password)
                .email(email)
                .firstName(firstName)
                .lastName(lastName)
                .birthday(birthday)
                .role(new Roles(2L, "User"))
                .build();
    }
}
