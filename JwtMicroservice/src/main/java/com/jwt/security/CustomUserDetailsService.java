package com.jwt.security;

import com.jwt.entity.User;
import com.jwt.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // This Class helps us to load the userName
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user  = this.userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not Found with this email-Id !!"));
        return user;
    }

}
