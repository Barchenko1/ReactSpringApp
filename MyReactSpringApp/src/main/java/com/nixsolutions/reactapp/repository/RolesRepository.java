package com.nixsolutions.reactapp.repository;

import com.nixsolutions.reactapp.domain.Roles;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RolesRepository extends CrudRepository<Roles, Long> {
    Roles findRolesById(Long id);

    Roles findRolesByName(String name);

}
