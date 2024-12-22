package com.saarthi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saarthi.model.MedicineSynonyms;
import com.saarthi.repo.MedicineSynonymsRepo;

@Service
public class MedicineSynonymsService {

	@Autowired
	MedicineSynonymsRepo medicineSynonymsRepo;
	
	public List<MedicineSynonyms> findAll() {
		return medicineSynonymsRepo.findAll();
	}

}
