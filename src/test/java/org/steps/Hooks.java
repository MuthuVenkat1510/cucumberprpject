package org.steps;

import java.io.IOException;

import org.base.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {
	@Before
	public void beforedone() {
		launchBrowser();
	}

	@After
	public void afterdone(Scenario s) throws IOException {
		if (s.isFailed()) {
			String name = s.getName();
			String replace = name.replace(" ", "_");
			toTakeScreenShot(replace);
		} else {
			
		}
		toQuit();
	}

}
