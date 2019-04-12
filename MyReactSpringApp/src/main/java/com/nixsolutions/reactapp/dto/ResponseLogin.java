package com.nixsolutions.reactapp.dto;

import com.nixsolutions.reactapp.domain.Roles;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResponseLogin {
    private String login;
    private String token;
    private Roles role;
}
