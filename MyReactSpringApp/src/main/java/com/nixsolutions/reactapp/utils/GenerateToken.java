package com.nixsolutions.reactapp.utils;

import com.nixsolutions.reactapp.dto.LoginForm;
import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import org.springframework.stereotype.Component;

@Component
public class GenerateToken {
    public String generateToken(LoginForm loginform){
        return Base64.encode((loginform.getLogin()+ ":"+ loginform.getPassword()).getBytes());
    }
}
