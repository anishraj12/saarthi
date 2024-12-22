package com.saarthi.repo;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

import com.saarthi.model.DataModel;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.ParameterExpression;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
@Repository
public class DataRepoIml {
	
	@Autowired
	EntityManager em;
	
	public List<DataModel>  findAllSymptoms(String symptoms1, String symptoms2, String symptoms3){
		 CriteriaBuilder cb = em.getCriteriaBuilder();

		  CriteriaQuery<DataModel> q = cb.createQuery(DataModel.class);
		  Root<DataModel> c = q.from(DataModel.class);
		    
		  
		  List<Predicate> predicates = new ArrayList<Predicate>();
		  predicates.add(cb.equal( c.get(symptoms1),"1"));
		  predicates.add(cb.equal( c.get(symptoms2),"1"));
		  predicates.add(cb.equal( c.get(symptoms3),"1"));
		  
		  Predicate [] predicatesarr = predicates.toArray(new Predicate[predicates.size()]); 
		CriteriaQuery<DataModel> str= q.select(c).where(predicatesarr);
		  
		  TypedQuery<DataModel> query = em.createQuery(str);
		  List<DataModel> allitems = query.getResultList();
		return allitems ;
		 
	 }
}
