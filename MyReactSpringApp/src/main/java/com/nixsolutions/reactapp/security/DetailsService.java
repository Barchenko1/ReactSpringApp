package com.nixsolutions.reactapp.security;

//import com.nixsolutions.reactapp.domain.Users;
//import com.nixsolutions.reactapp.repository.UsersRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//
//import java.util.Collections;
//
//@Component
//public class DetailsService implements UserDetailsService {
//
//    @Autowired
//    private UsersRepository usersRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
//        Users user = usersRepository.findUsersByLogin(s);
//        if (user == null){
//            throw new UsernameNotFoundException(s + "wasn't found");
//        }
//
//        String roleName = user.getRole().getName();
//        SimpleGrantedAuthority grantedAuthority = new SimpleGrantedAuthority(roleName);
//        return new User(user.getLogin(), user.getPassword(), Collections.singletonList(grantedAuthority));
//    }
//}
