package com.nixsolutions.reactapp.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class LoginForm {
    private String login;
    private String password;
}
