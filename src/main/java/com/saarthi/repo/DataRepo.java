package com.saarthi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.databind.ser.std.StdKeySerializers.Default;
import com.saarthi.model.DataModel;
@Repository
public interface DataRepo  extends JpaRepository<DataModel, Long>{
	
	@Query(value ="select d.prognosis from data_model d where d.acidity=?1 and d.indigestion=?2 and "
			+ " d.headache =?3 and d.blurred_and_distorted_vision=?4 and d.excessive_hunger=?5 "
			+ " and d.muscle_weakness=?6 and d.stiff_neck=?7 and  d.swelling_joints=?8 and "
			+ " d.movement_stiffness=?9 and d.depression=?10 and  d.irritability=?11 and"
			+ " d.visual_disturbances=?12 and d.painful_walking=?13 and d.abdominal_pain=?14 and "
			+ " d.nausea=?15 and d.vomiting=?16 and d.blood_in_mucus=?17 and d.fatigue=?18 and d.fever=?19  and "
			+ " d.dehydration=?20 and d.loss_of_appetite=?21 and d.cramping=?22 and d.blood_in_stool=?23 and "
			+ " d.gnawing=?24 and d.upper_abdomain_pain=?25 and d.fullness_feeling=?26  and d.hiccups=?27 and "
			+ " d.abdominal_bloating =?28 and d.heartburn=?29 and d.belching=?30 and  d.burning_ache =?31 " , nativeQuery = true)
	 String checkWithCondition(int acidity, int indigestion, int headache, int blurred_and_distorted_vision,int excessive_hunger,
			int muscle_weakness, int stiff_neck, int swelling_joints, int movement_stiffness,int depression,
			int irritability, int visual_disturbances, int painful_walking, int abdominal_pain,int nausea, 
			int vomiting, int blood_in_mucus, int fatigue, int fever,int dehydration, 
			int loss_of_appetite,
			int cramping, int blood_in_stool, int gnawing, int upper_abdomain_pain, int fullness_feeling, 
			int hiccups,int abdominal_bloating, int heartburn, int belching, int burning_ache);

	
	 

	
	
			
	
}

