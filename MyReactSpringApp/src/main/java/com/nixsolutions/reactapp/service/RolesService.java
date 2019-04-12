package com.nixsolutions.reactapp.service;

import com.nixsolutions.reactapp.domain.Roles;
import com.nixsolutions.reactapp.repository.RolesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@Slf4j
public class RolesService {

    @Autowired
    private RolesRepository rolesRepository;

    public Roles saveRole(Roles role) {
        if (role == null) {
            log.error("Role == null", new NullPointerException());
            throw new NullPointerException();
        }
        try {
            log.trace("Call saveRole");
            rolesRepository.save(role);
        } catch (Exception e) {
            log.error("Error in time save role", e);
            throw e;
        }
        return role;
    }

    public Iterable<Roles> findAll() {
        try {
            log.trace("Call method findAll");
            return rolesRepository.findAll();
        } catch (Exception e) {
            log.error("Error in time findAll", e);
            throw e;
        }
    }
}
