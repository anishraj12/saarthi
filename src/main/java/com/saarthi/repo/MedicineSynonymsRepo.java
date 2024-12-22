package com.saarthi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saarthi.model.MedicineSynonyms;

public interface MedicineSynonymsRepo extends JpaRepository<MedicineSynonyms, Long> {
	
}
