package com.saarthi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saarthi.model.AdvisoryModel;


public interface AdvisoryRepo extends JpaRepository<AdvisoryModel, Long>{

}
