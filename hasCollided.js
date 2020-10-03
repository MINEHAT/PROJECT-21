function hasCollided(lwall,lbullet){

    bulletRightEdge=bullet.x + bullet.width;
    wallLeftEdge=wall.x;
  
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
  
    return false;
    
  }